import { MailAdapter, SendMailData } from "../mail-adapters";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "9d46ff6e1b9855",
        pass: "358412c48cdb38"
    }
});

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({subject, body}: SendMailData) {

        await transport.sendMail({
            from: 'Equipe Feedget <emailex@feedget.com>',
            to: 'Gabriel Mota <gabrielmota287@gmail.com>',
            subject,
            html: body,

        })
    };
}