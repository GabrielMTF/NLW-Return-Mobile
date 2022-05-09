import express from 'express';
import { NodemailerMailAdapter } from './adapters/nodemailer/nodemailer-mail-adapter';
import { PrismaFeedbackRepository } from './repositories/prisma/prisma-feedbacks-repositoy';
import { SubmitFeedbackUseCase } from './use-cases/submit-feedback-use-cases';

export const routes = express.Router()

routes.post('./feedbacks', async (req, res) => {
    const { type, coment, screenshot } = req.body;

    const prismaFeedbackRepository = new PrismaFeedbackRepository()
    const nodemailerMailAdapter = new NodemailerMailAdapter

    const submitFeedbackUseCase = new SubmitFeedbackUseCase(
        prismaFeedbackRepository,
        nodemailerMailAdapter
    )

    await submitFeedbackUseCase.execute({
        type,
        coment,
        screenshot,
    })

    return res.status(201).send()
})