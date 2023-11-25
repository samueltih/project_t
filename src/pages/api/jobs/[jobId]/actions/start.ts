// Start the job: Pending -> In Progress
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(request: NextApiRequest, response: NextApiResponse<any>) {
    const { id } = request.query;

    switch(request.method) {
        case 'PUT': 
    }
}