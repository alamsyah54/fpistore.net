import { google } from "googleapis"

export async function getGoogleSheetsData(
    spreadsheetId: string,
    range: string
) {
    const auth = await google.auth.getClient({
        projectId: process.env.GOOGLE_SHEETS_PROJECT_ID,
        credentials: {
            type: "service_account",
            private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY,
            client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
            client_id: process.env.GOOGLE_SHEETS_CLIENT_ID,
            token_url: "https://oauth2.googleapis.com/token",
            universe_domain: "googleapis.com",
        },
        scopes: [
            "https://www.googleapis.com/auth/spreadsheets",
            "https://www.googleapis.com/auth/drive",
            "https://www.googleapis.com/auth/drive.file",
        ],
    })

    const sheets = google.sheets({ version: "v4", auth })

    const getData = await sheets.spreadsheets.values.get({
        spreadsheetId: spreadsheetId,
        range: range,
    })

    return getData.data.values
}
export function censorEmail(email: string): string {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
        return email
    }

    const [username, domain] = email.split("@")

    const censoredUsername =
        username.slice(0, 5) + "*".repeat(6) + username.slice(-1)
    return `${censoredUsername}@${domain}`
}

export function censorPassword(password: string, censor: number): string {
    if (password.length < 2) {
        return password
    }

    const firstChar = password[0]
    const lastChar = password[password.length - 1]

    const censoredPassword = firstChar + "*".repeat(censor) + lastChar

    return censoredPassword
}

function formatData(data: string[][]): string[][] {
    const formattedData = data.map((row) => {
        return row.map((cell, index) => {
            if (index === 1) {
                return cell
            } else if (index === 3 && typeof cell === "string") {
                return cell
            } else {
                return cell
            }
        })
    })

    return formattedData
}
export const fetchData = async () => {
    const dataPivate = (await getGoogleSheetsData(
        process.env.SPREADSHEET_ID as string,
        process.env.PRIVATE_SHEETS as string
    )) as string[][]

    const dataShared = (await getGoogleSheetsData(
        process.env.SPREADSHEET_ID as string,
        process.env.SHARED_SHEETS as string
    )) as string[][]
    const infoStock = (await getGoogleSheetsData(
        process.env.SPREADSHEET_ID as string,
        process.env.STOCK_SHEETS as string
    )) as string[][]

    const PrivateFormated = formatData(dataPivate)
    const SharedFormated = formatData(dataShared)
    const StockFormated = formatData(infoStock)
    const PrivateData = PrivateFormated.slice(1)
    const SharedData = SharedFormated.slice(1)
    const Stock = StockFormated.slice(1)
    const Data = [...PrivateData, ...SharedData].sort(
        (a: any, b: any) => a[4] - b[4]
    )
    const getPrivateOnly = (data: string[][]): string[][] => {
        return data.filter((innerArray) => innerArray[0] === "PRIVATE")
    }

    const getSharedOnly = (data: string[][]): string[][] => {
        return data.filter((innerArray) => innerArray[0] === "SHARED")
    }

    const getAll = (data: string[][]): string[][] => {
        return data.filter(
            (innerArray) =>
                innerArray[0] === "PRIVATE" || innerArray[0] === "SHARED"
        )
    }
    const Private = getPrivateOnly(Data)
    const Shared = getSharedOnly(Data)
    const allData = getAll(Data)
    return { Private, Shared, allData, Stock }
}
