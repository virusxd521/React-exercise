import QuoraAnswers from "./QuoraAnswers";

const Quora = ({title, question}) => {
    return (
    <>
        <h2>{title}</h2>
        <p>{question}</p>
        <QuoraAnswers />
    </>
    )

}

export default Quora;