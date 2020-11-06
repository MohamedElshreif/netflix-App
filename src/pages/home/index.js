import React from 'react';
import HeaderContainer from '../../containers/header';
import JumbotronContainer from '../../containers/jumbotron';
import FooterContainer from '../../containers/footer';
import { FaqsContainer } from '../../containers/faqsData';
import OptForm from '../../components/opt-form';
import Feature from '../../components/feature';

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>Unlimited movies, TV shows, and more.</Feature.Title>
          <Feature.Text>Watch anywhere. Cancel anytime.</Feature.Text>
        </Feature>
        <OptForm>
          <OptForm.Text>
            Ready to watch? Enter your email to create or restart your
            membership.
          </OptForm.Text>
          <OptForm.Input placeholder='Email address' />
          <OptForm.Button>get started</OptForm.Button>
        </OptForm>
      </HeaderContainer>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}
