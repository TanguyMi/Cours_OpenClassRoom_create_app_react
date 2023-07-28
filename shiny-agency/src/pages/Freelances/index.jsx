import { useState, useEffect, useContext } from 'react';
import Card from '../../components/Card';
import styled from 'styled-components';
import colors from '../../utils/style/color';
import { Loader } from '../../utils/style/atoms';
import { SurveyContext } from '../../utils/context';
import { useFetch, useTheme } from '../../utils/hooks';
import { Link } from 'react-router-dom';

const CardsContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-rows: 350px 350px;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
`;

const PageTitle = styled.h1`
  font-size: 30px;
  color: black;
  text-align: center;
  padding-bottom: 30px;
`;

const PageSubtitle = styled.h2`
  font-size: 20px;
  color: ${colors.secondary};
  font-weight: 300;
  text-align: center;
  padding-bottom: 30px;
`;

const freelanceProfiles = [
      {
            name: 'Jane Doe',
            jobTitle: 'Devops'
      },
      {
            name: 'John Doe',
            jobTitle: 'Developpeur frontend'
      },
      {
            name: 'Jeanne Biche',
            jobTitle: 'Développeuse Fullstack'
      }
];

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

function Freelances() {

      // const [surveyData, setSurveyData] = useState([]);
      // const [isDataLoading, setDataLoading] = useState(false);

      const { theme } = useTheme();
      const { data, isLoading, error } = useFetch(
            `http://localhost:8000/freelances`
      );

      // Ici le "?" permet de s'assurer que data existe bien.
      // Vous pouvez en apprendre davantage sur cette notation ici :
      // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Optional_chaining
      const freelancersList = data?.freelancersList;

      if (error) {
            return <span>Oups il y a eu un problème</span>;
      }

      // const [error, setError] = useState(false);
      // const [freelancersList, setFreelancesList] = useState([]);
      // useEffect(() => {
      //       async function fetchFreelances() {
      //             setDataLoading(true);
      //             try {
      //                   const response = await fetch(`http://localhost:8000/freelances`);
      //                   const { freelancersList } = await response.json();
      //                   setFreelancesList(freelancersList);
      //             } catch (err) {
      //                   console.log('===== error =====', err);
      //                   setError(true);
      //             } finally {
      //                   setDataLoading(false);
      //             }
      //       }
      //
      //       fetchFreelances();
      // }, []);
      //
      // if (error) {
      //       return <span>Oups il y a eu un problème</span>;
      // }

      // useEffect(() => {
      //       // fetchData()
      //       setDataLoading(true);
      //       fetch(`http://localhost:8000/freelances`).then((response) =>
      //             response.json().then(({ freelancersList }) => {
      //                   setSurveyData(freelancersList);
      //                   setDataLoading(false);
      //                   console.log(freelancersList);
      //             })
      //       );
      // }, []);
      return (
            <div>
                  <PageTitle theme={theme}>Trouvez votre prestataire</PageTitle>
                  <PageSubtitle theme={theme}>
                        Chez Shiny nous réunissons les meilleurs profils pour vous.
                  </PageSubtitle>
                  {isLoading ? (
                        <LoaderWrapper>
                              <Loader theme={theme} data-testid='loader' />
                        </LoaderWrapper>
                  ) : (
                        <CardsContainer>
                              {freelancersList.map((profile, index) => (
                                    <Link key={`freelance-${profile.id}`} to={`/profile/${profile.id}`}>
                                          <Card
                                                label={profile.job}
                                                title={profile.name}
                                                picture={profile.picture}
                                                theme={theme}
                                          />
                                    </Link>
                              ))}
                        </CardsContainer>
                  )}
            </div>
      );
}

export default Freelances;
