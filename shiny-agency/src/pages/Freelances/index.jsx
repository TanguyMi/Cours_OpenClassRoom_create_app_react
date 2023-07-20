import { useState, useEffect } from 'react';
import Card from '../../components/Card';
import styled from 'styled-components';
import colors from '../../utils/style/color';
import { Loader } from '../../utils/style/atoms';

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

function Freelances() {

      const [surveyData, setSurveyData] = useState([]);
      const [isDataLoading, setDataLoading] = useState(false);
      // useEffect(() => {
      //       // fetchData()
      //       setDataLoading(true);
      //       fetch(`http://localhost:8000/freelances`).then((response) =>
      //             response.json().then(({ freelancesData }) => {
      //                   setFreelancesData(freelancesData);
      //                   setDataLoading(false);
      //                   console.log(response);
      //             })
      //       );
      // }, []);
      useEffect(() => {
            // fetchData()
            setDataLoading(true);
            fetch(`http://localhost:8000/freelances`).then((response) =>
                  response.json().then(({ freelancersList }) => {
                        setSurveyData(freelancersList);
                        setDataLoading(false);
                        console.log(freelancersList);
                  })
            );
      }, []);
      return (
            <div>
                  <PageTitle>Trouvez votre prestataire</PageTitle>
                  <PageSubtitle>
                        Chez Shiny nous réunissons les meilleurs profils pour vous.
                  </PageSubtitle>
                  {isDataLoading ? (
                        <Loader />
                  ) : (
                        <CardsContainer>

                              {surveyData.map((profile, index) => (
                                    <Card
                                          key={`${profile.name}-${index}`}
                                          label={profile.jobTitle}
                                          title={profile.name}
                                          picture={profile.picture}
                                    />
                              ))}
                        </CardsContainer>

                  )}
            </div>
      );
}

export default Freelances;
