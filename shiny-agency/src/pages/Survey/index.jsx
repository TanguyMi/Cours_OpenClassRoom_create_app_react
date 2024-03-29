import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../utils/style/color';
import { Loader } from '../../utils/style/atoms';
import { SurveyContext } from '../../utils/context';
import { useFetch } from '../../utils/hooks';

const SurveyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const QuestionTitle = styled.h2`
  text-decoration: underline;
  text-decoration-color: ${colors.primary};
`;

const QuestionContent = styled.span`
  margin: 30px;
`;

const LinkWrapper = styled.div`
  padding-top: 30px;
  & a {
    color: black;
  }
  & a:first-of-type {
    margin-right: 20px;
  }
`;

const ReplyBox = styled.button`
  border: none;
  height: 100px;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.backgroundLight};
  border-radius: 30px;
  cursor: pointer;
  box-shadow: ${(props) =>
      props.isSelected ? `0px 0px 0px 2px ${colors.primary} inset` : 'none'};
  &:first-child {
    margin-right: 15px;
  }
  &:last-of-type {
    margin-left: 15px;
  }
`;

const ReplyWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

function Survey() {
      const { questionNumber } = useParams();
      const questionNumberInt = parseInt(questionNumber);
      const prevQuestionNumber = questionNumberInt === 1 ? 1 : questionNumberInt - 1;
      const nextQuestionNumber = questionNumberInt + 1;
      // const [surveyData, setSurveyData] = useState({});
      // const [isDataLoading, setDataLoading] = useState(false);
      const { saveAnswers, answers, error } = useContext(SurveyContext);
      const { data, isLoading } = useFetch(`http://localhost:8000/survey`);

      const { surveyData } = data;

      function saveReply(answer) {
            saveAnswers({ [questionNumber]: answer });
      }

      // Cette syntaxe permet aussi bien de faire des calls API.
      // Mais pour utiliser await dans une fonction, il faut que celle-ci soit async (pour asynchrone).
      // Comme la fonction passée à useEffect ne peut pas être asynchrone,
      // il faut utiliser une fonction qui est appelée dans useEffect et déclarée en dehors, comme ici 👇.
      // Essayez de commenter le code créé dans le chapitre et de décommenter fetchData pour voir.

      // async function fetchData() {
      //   try {
      //     const response = await fetch(`http://localhost:8000/survey`)
      //     const { surveyData } = await response.json()
      //     setSurveyData(surveyData)
      //   } catch (error) {
      // console.log('===== error =====', error)
      // setError(true)
      //   }
      // }

      // useEffect(() => {
      //       // fetchData()
      //       setDataLoading(true);
      //       fetch(`http://localhost:8000/survey`).then((response) =>
      //             response.json().then(({ surveyData }) => {
      //                   setSurveyData(surveyData);
      //                   setDataLoading(false);
      //                   console.log(surveyData);
      //             })
      //       );
      // }, []);
      if (error) {

            return <span>Il y a un problème</span>;

      }
      return (
            <SurveyContainer>
                  <QuestionTitle>Question {questionNumber}</QuestionTitle>
                  {isLoading ? (
                        <Loader />
                  ) : (
                        <QuestionContent>

                              {surveyData && surveyData[questionNumber]}

                        </QuestionContent>
                  )}
                  {answers && (
                        <ReplyWrapper>
                              <ReplyBox
                                    onClick={() => saveReply(true)}
                                    isSelected={answers[questionNumber] === true}
                              >
                                    Oui
                              </ReplyBox>
                              <ReplyBox
                                    onClick={() => saveReply(false)}
                                    isSelected={answers[questionNumber] === false}
                              >
                                    Non
                              </ReplyBox>
                        </ReplyWrapper>
                  )}
                  <LinkWrapper>
                        <Link to={`/survey/${prevQuestionNumber}`}>Précédent</Link>
                        {data[questionNumberInt + 1] ? (
                              <Link to={`/survey/${nextQuestionNumber}`}>Suivant</Link>
                        ) : (
                              <Link to='/results'>Résultats</Link>
                        )}
                  </LinkWrapper>
            </SurveyContainer>
      );
}

export default Survey;
