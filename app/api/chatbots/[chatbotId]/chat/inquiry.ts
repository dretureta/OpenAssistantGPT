import { db } from "@/lib/db";

export function createClientInquiry(
    chatbotId: string,
    threadId: string,
    name: string,
    email: string,
    inquiry: string,
) {
    console.log('createClientInquiry: ', chatbotId, threadId, name, email, inquiry)

    db.clientInquiries.create({
        data: {
            chatbotId,
            threadId,
            name,
            email,
            inquiry,
        },
        select: {
            id: true,
        },
    })
}