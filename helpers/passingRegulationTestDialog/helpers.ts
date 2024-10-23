import { RegulationContentQuestionAnswerDto, RegulationContentQuestionDto } from "../../api";
import { compareArraysOfNumbers } from "../arrayFunctions";
import {
  answerKeys,
  answerKeysType,
  ICounterRightAnswers,
  PassingRegulationQestion,
} from "../../../components/modules/dialogs/passingRegulationTestDialog/PassingRegulationTest.interface";

export const getQuestionWithResetAnswers = (question: RegulationContentQuestionDto | PassingRegulationQestion) =>
  question.answers?.map((answer) => ({ ...answer, isRight: false }));

export const handeleIdentifyAnswerKey = (question: RegulationContentQuestionDto): answerKeysType => {
  let { countRights } = counterRightAnswers(question);
  return countRights === 1 ? answerKeys.singleAnswer : answerKeys.multipleAnswer;
};

export const rewriteMultipleAnswer = (
  prevQuestions: PassingRegulationQestion[],
  questionId: number,
  answerId: number,
  value: boolean
): PassingRegulationQestion[] => {
  const newAnswers: RegulationContentQuestionAnswerDto[] = (
    prevQuestions.find((question) => question.id === questionId)?.answers ?? []
  ).map((answer) => {
    if (answer.id === answerId) return { ...answer, isRight: value };
    return answer;
  });
  return prevQuestions.map((question) => {
    if (question.id === questionId) return { ...question, answers: newAnswers };
    return question;
  });
};

export const rewriteSingleAnswer = (
  prevQuestions: PassingRegulationQestion[],
  questionId: number,
  answerId: number
) => {
  const newAnswers: RegulationContentQuestionAnswerDto[] = (
    prevQuestions.find((question) => question.id === questionId)?.answers ?? []
  ).map((answer) => {
    if (answer.id === answerId) return { ...answer, isRight: true };
    else return { ...answer, isRight: false };
  });
  return prevQuestions.map((question) => {
    if (question.id === questionId) return { ...question, answers: newAnswers };
    return question;
  });
};

export const counterRightAnswers = (
  question: RegulationContentQuestionDto | PassingRegulationQestion
): ICounterRightAnswers => {
  let countRightAnswers: number = 0;
  const arrIdsRights: number[] = [];
  question.answers?.forEach((item) => {
    if (item.isRight) {
      countRightAnswers += 1;
      arrIdsRights.push(item.id!);
    }
  });
  return { countRights: countRightAnswers, arrIdsRights: arrIdsRights };
};

export const comparisonAnswers = (
  initialQuestions: RegulationContentQuestionDto[],
  currentQuestions: PassingRegulationQestion[]
): boolean => {
  let isAllRight: boolean = true;
  currentQuestions.forEach((question) => {
    if (!isAllRight) return false;
    const initialAnswers = counterRightAnswers(initialQuestions.find((question2) => question2.id === question.id)!);
    const currentRightAnswers = counterRightAnswers(question);
    if (question.answerKey === answerKeys.multipleAnswer) {
      if (initialAnswers.countRights !== currentRightAnswers.countRights) isAllRight = false;
    }
    if (!compareArraysOfNumbers(initialAnswers.arrIdsRights, currentRightAnswers.arrIdsRights)) isAllRight = false;
  });
  return isAllRight;
};

export const compareArrays = (initial: RegulationContentQuestionDto[], current: PassingRegulationQestion[]) => {
  const result: PassingRegulationQestion[] = [];

  for (let i = 0; i < initial.length; i++) {
    const initialQuestion = initial[i];
    const currentQuestion = current[i];
    const updatedQuestion: PassingRegulationQestion = { ...currentQuestion };

    if (initialQuestion.answers && currentQuestion.answers) {
      updatedQuestion.answers = initialQuestion.answers.map((initialAnswer) => {
        const currentAnswer = currentQuestion.answers!.find((a) => a.id === initialAnswer.id);
        return currentAnswer?.isRight && initialAnswer.isRight
          ? { ...currentAnswer }
          : {
              ...currentAnswer,
              isRight: false,
            };
      });
    }

    if (updatedQuestion.answers && updatedQuestion.answers.length > 0) {
      result.push(updatedQuestion);
    }
  }

  return result;
};

export const onValidateAnswered = (qestions: RegulationContentQuestionDto[]): boolean => {
  let answeredQestions = 0;
  for (let i = 0; i < qestions.length; i++) {
    const countMarkedAnswers = qestions[i]?.answers?.filter((item) => item.isRight)?.length;
    if (countMarkedAnswers && countMarkedAnswers > 0) answeredQestions += 1;
  }
  return answeredQestions === qestions.length;
};
