import { useEffect, useState, Fragment } from "react";
import QuizSaveBtn from "../components/answer/QuizSaveBtn";
import QuizCard from "../components/answer/QuizCard";
import { Question } from "../data/types";
import { API } from "../API";

export type Quizs = {
  Quiz1: string;
  Quiz2: string;
  firstOption: boolean;
  secondOption: boolean;
  Quiz3: string;
}

const QuestionAnswerForm = () => {
  const [questions, setQuestions] = useState<Question[] | undefined>([]);
  const [Quizs, setQuizs] = useState<Quizs>({
    Quiz1: '',
    Quiz2: '',
    firstOption: false,
    secondOption: false,
    Quiz3: '',
  });

  const onSubmit = () => {
    API.submit(Quizs);
  }

  useEffect(() => {
    const getAllData = async () => {
      const response = await import("../data/questions1.json");
      setQuestions(response.default);
    }
    getAllData();
  }, []);

  const QuestionComponent = questions?.map((question: Question, index) => 
    <Fragment key={question.id}>
      <QuizCard question={question} index={index + 1} quizs={Quizs} setQuizs={setQuizs}/>
    </Fragment>
  )

  return (
    <div className="font-sans">
      <div className='flex p-4 justify-end items-center self-stretch gap-2 bg-white shadow-bar'>
        <QuizSaveBtn Name="回答を保存" onClick={onSubmit} />
      </div>
      <div className='flex flex-col py-10 px-6 md:px-[120px] items-start gap-6 self-stretch bg-[#EEEEEE]'>
        {
          QuestionComponent
        }
      </div>
    </div>
  )
}

export default QuestionAnswerForm;
