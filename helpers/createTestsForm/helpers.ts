import { RegulationContentQuestionAnswerDto, RegulationContentQuestionDto } from "../../api";
import { errorKeys } from "../../constants/consts";

export const onAttachAnswers = (
  prevQuestions: RegulationContentQuestionDto[],
  deleleteQuestionId: number,
  answers: RegulationContentQuestionAnswerDto[]
): RegulationContentQuestionDto[] => {
  return prevQuestions.map((item) => {
    if (item.id === deleleteQuestionId) return { ...item, answers };
    return item;
  });
};

export const onChangeQuestionName = (
  prevQuestions: RegulationContentQuestionDto[],
  newValue: string,
  id: number
): RegulationContentQuestionDto[] => {
  return prevQuestions.map((item) => {
    if (item.id === id) return { ...item, name: newValue };
    return item;
  });
};

export const onDeleteQestion = (
  prevQuestions: RegulationContentQuestionDto[],
  qestionId: number
): RegulationContentQuestionDto[] => prevQuestions.filter((item) => item.id !== qestionId);

export const onChangeAnswersIsRight = (
  prevAnswers: RegulationContentQuestionAnswerDto[],
  newValue: boolean,
  id: number
): RegulationContentQuestionAnswerDto[] => {
  return prevAnswers.map((item) => {
    if (item.id === id) return { ...item, isRight: newValue };
    return item;
  });
};
export const onChangeAnswerName = (
  prevAnswers: RegulationContentQuestionAnswerDto[],
  newValue: string,
  id: number
): RegulationContentQuestionAnswerDto[] => {
  return prevAnswers.map((item) => {
    if (item.id === id) return { ...item, name: newValue };
    return item;
  });
};

export const onDeleteAnswersByQestionId = (
  questionId: number,
  questions: RegulationContentQuestionDto[],
  deleteAnswerId: number
) => {
  return questions.map((question) => {
    if (question.id === questionId)
      return {
        ...question,
        answers: question?.answers?.filter((item) => item.id !== deleteAnswerId),
      };
    return question;
  });
};

export const onReplaceAnswersByQestionId = (
  questionId: number,
  questions: RegulationContentQuestionDto[],
  newAnswers: RegulationContentQuestionAnswerDto[]
): RegulationContentQuestionDto[] => {
  return questions.map((question) => {
    if (question.id === questionId) {
      return { ...question, answers: newAnswers };
    }
    return question;
  });
};

export const onGetAnswersByQestionId = (
  questionId: number,
  questions: RegulationContentQuestionDto[]
): RegulationContentQuestionAnswerDto[] => {
  return questions.find((question) => question.id === questionId)?.answers ?? [];
};

export const resetIds = (questions: RegulationContentQuestionDto[]): RegulationContentQuestionDto[] => {
  return questions.map((item) => ({
    ...item,
    id: 0,
    answers: item.answers?.map((item) => ({ ...item, id: 0, questionId: 0 })),
  }));
};

export const validateTest = (questions: RegulationContentQuestionDto[]) => {
  questions.forEach((question) => {
    if (!question.name || question.name.trim().length === 0) throw Error(errorKeys.noNameQuestion);

    if (!question.answers || question.answers.length < 2) throw Error(errorKeys.noAnswers);

    let countRightsAnswers: number = 0;
    question.answers.forEach((answer) => {
      if (answer.isRight) countRightsAnswers += 1;
      if (!answer.name || answer.name.trim().length === 0) throw Error(errorKeys.noNameAnswer);
    });
    if (countRightsAnswers === 0) throw Error(errorKeys.noRightsAnswer);
  });
};
