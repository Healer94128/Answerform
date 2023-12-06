import React, { useEffect, useState, Fragment } from "react";
import { Question, CheckboxType } from "../../data/types";
import Chckbox from "../../data/checkbox.json"
import { Quizs } from "../../pages/QuestionAnswerForm";

interface QuizCardProps {
  question: Question;
  index: number;
  quizs: any;
  setQuizs:  React.Dispatch<React.SetStateAction<Quizs>>;
}

const QuizCard: React.FC<QuizCardProps> = ({ question, index, quizs, setQuizs }) => {
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState('');
  const [otherOption, setOtherOption] = useState(true);
  const [showLink, setShowLink] = useState(false);

  useEffect(() => {
    if (answer.length === 100) setError('100文字以内にしてください。');
    else {
      setError('');
      switch (index) {
        case 1:
          setQuizs({...quizs, Quiz1: quizs});
          break;
        case 2:
          setQuizs({...quizs, Quiz2: quizs});
          break;
        case 3:
          setQuizs({...quizs, Quiz3: quizs});
          break;
        default:
          break;
      }
    };
  }, [answer])

  const onChangeOption = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case '選択肢A':
        setQuizs({...quizs, firstOption: !quizs.firstOption});
        break;
      case '選択肢B':
        setQuizs({...quizs, secondOption: !quizs.secondOption});
        break;
      case 'その他':
        setOtherOption(!otherOption);
        break;
      default:
        break;
    }
  }

  const handleHover = () => {
    setShowLink(true);
  }

  const handleMouseLeave = () => {
    setShowLink(false)
  }

  const QuestionTextComponent = 
    question.qaFormat === 'TEXT' &&
    <div className="flex flex-col items-start self-stretch gap-[3px]">
      <div className="relative flex px-3 py-0 items-start self-stretch rounded  border-none hover:border-solid border-2 border-red-600">
        <textarea name="answer" value={answer} onChange={({target:{value}})=>setAnswer(value)} maxLength={100} className="w-full h-[72px]  px-2.5 pb-2.5 pt-4 text-sx text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
        <label className="absolute text-sx text-gray-600 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-red-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">答えを入力してください</label>
      </div>
      <div className="flex flex-row justify-between px-3.5 py-0 items-start self-stretch">
        <p className="text-xs leading-5 tracking-custom text-red-600">{error}</p>
        <p className="text-secondary text-xs leading-5 tracking-custom">0/100文字</p>
      </div>
    </div>

  const QuestionLinkComponent = 
    showLink &&
    <div className="flex items-center self-stretch px-5 py-4 border-solid border-b-2">
      <a href="/#" className="flex flex-row items-start py-1 gap-2 h-[18px]">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" className="text-emerald-600">
          <path d="M2.925 9C2.925 7.7175 3.9675 6.675 5.25 6.675H8.25V5.25H5.25C3.18 5.25 1.5 6.93 1.5 9C1.5 11.07 3.18 12.75 5.25 12.75H8.25V11.325H5.25C3.9675 11.325 2.925 10.2825 2.925 9ZM6 9.75H12V8.25H6V9.75ZM12.75 5.25H9.75V6.675H12.75C14.0325 6.675 15.075 7.7175 15.075 9C15.075 10.2825 14.0325 11.325 12.75 11.325H9.75V12.75H12.75C14.82 12.75 16.5 11.07 16.5 9C16.5 6.93 14.82 5.25 12.75 5.25Z" fill="#35836D" />
        </svg>
        <label className="text-[13px] tracking-[0.46px] font-bold leading-[22px] text-emerald-600">共有リンクを発行</label>
      </a>
    </div>

  const QuestionCheckboxComponent = 
    question.qaFormat === 'CHECKBOX' &&
    <div className="flex flex-col items-start self-stretch ">
      {Chckbox?.map((value: CheckboxType, index) => 
        <Fragment key={value.id}>
          <div className="flex items-center">
            <div className="flex items-start p-[9px] gap-[10px] rounded-[21px]">
              <input type="checkbox" name="選択肢A" className="w-6 h-6" onChange={onChangeOption} />
            </div>
            <label className="text-custom text-base tracking-[0.4px]">{value.value}</label>
          </div>
        </Fragment>
      )}
      <div className="flex items-center self-stretch">
        <div className="flex items-start p-[9px] gap-[10px] rounded-[21px]">
          <input type="checkbox" name="その他" className="w-6 h-6" onChange={onChangeOption} />
        </div>
        <div className="flex flex-col justify-center items-center self-stretch w-full">
          <textarea className="text-base tracking-custom outline-none w-full h-[24px]" placeholder="その他"  name="answer" value={answer} onChange={({target:{value}})=>setAnswer(value)} maxLength={100} disabled={otherOption} />
          <div className="flex h-0.5 pt-0.5 justify-center items-center self-stretch" style={otherOption ? { backgroundColor: '#00000099' } : { backgroundColor: '#059669' }}></div>
        </div>
      </div>
    </div>
  
  const QuestionBetComponent = 
    <div className="flex flex-col items-start gap-2 self-stretch">
      <a href="/#" className="text-xs leading-5 tracking-custom text-secondary">{question.questionNumber} {question.questionTitle}</a>
      <p className="self-stretch text-xl font-medium leading-8 tracking-[0.15px] text-[#23221F]">{question.questionSentence}</p>
    </div>

  return (
    <div onMouseEnter={handleHover} onMouseLeave={handleMouseLeave} className="flex flex-col items-start self-stretch bg-white rounded-lg opacity-60 hover:opacity-100 shadow-answer-card border-none hover:border-solid border-2 border-emerald-600 transition">
      {
        QuestionLinkComponent
      }

      <div className="flex flex-col items-start self-stretch  p-6 gap-6">
        {QuestionBetComponent}
        <div className="flex flex-col items-start gap-2 self-stretch rounded ">o

          {
           QuestionTextComponent
          }

          {
            QuestionCheckboxComponent
          }

        </div>
      </div>
    </div>
  )
}

export default QuizCard;
