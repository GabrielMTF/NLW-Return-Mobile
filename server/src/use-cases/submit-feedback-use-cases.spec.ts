import { SubmitFeedbackUseCase } from "./submit-feedback-use-cases"

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
    { create: createFeedbackSpy },
    { sendMail: sendMailSpy },
)

describe('Submit feedback', () => {
    it('should be able to submit a feedback', async () => {
        await expect(submitFeedback.execute({
            type: 'BUG',
            coment: 'example coment',
            screenshot: 'data:image/png;base64sdgdflngdfkjgdnjkgsdbngjl',

        })).resolves.not.toThrow();

        expect(createFeedbackSpy).toHaveBeenCalled()
        expect(sendMailSpy).toHaveBeenCalled()
    });

    it('should not be able to submit a feedback without a type', async () => {
        await expect(submitFeedback.execute({
            type: '',
            coment: 'example coment',
            screenshot: 'data:image/png;base64sdgdflngdfkjgdnjkgsdbngjl',
        })).rejects.toThrow();
    });

    it('should not be able to submit a feedback without a coment', async () => {
        await expect(submitFeedback.execute({
            type: 'BUG',
            coment: '',
            screenshot: 'data:image/png;base64sdgdflngdfkjgdnjkgsdbngjl',
        })).rejects.toThrow();
    });

it('should not be able to submit a feedback with a invalid screenshot', async () => {
    await expect(submitFeedback.execute({
        type: 'BUG',
        coment: 'exemple coment',
        screenshot: 'invalid screenshot',
    })).rejects.toThrow();
});
});