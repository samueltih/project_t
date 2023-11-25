import { NextApiRequest, NextApiResponse } from "next";

export default function handler(request: NextApiRequest, response: NextApiResponse<any>) {

    switch(request.method) {
        case 'POST':
            const worker = request.body;
        case 'GET':
            const { page, size } = request.query;

            const parsedSize = parseInt(size as string);
            const parsedPage = parseInt(page as string);
    }
    
}