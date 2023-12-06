interface QuizSaveBtnProps {
  Name: string;
  onClick: () => void;
}

const QuizSaveBtn: React.FC<QuizSaveBtnProps> = ({ Name, onClick })  => {
  return (
    <button onClick={onClick} className="flex flex-col justify-center items-center rounded font-roboto text-sm font-bold uppercase text-white px-4 py-2 gap-2 bg-answer-save-btn shadow-answer-save-btn">
      { Name }
    </button>
  )
}

export default QuizSaveBtn;
