import React, { Component } from 'react'
import { Section, Title, SectionButton } from '../../utils'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { styles } from '../../utils'

export default class QuickInfo extends Component {
  render() {
    return (
      <Section>
        <Title message="let us tell you" title="our mission"></Title>
        <QuickInfoWrapper>
          <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at nisl euismod dolor porttitor mattis. Aenean non bibendum magna. Cras commodo ut nisl et aliquam. Vestibulum placerat est fringilla molestie tempus. Vivamus ac ligula auctor, bibendum urna vel, malesuada ligula. Cras at volutpat sapien, vel feugiat odio. Ut luctus erat vitae turpis dignissim, a tincidunt dui accumsan. </p>
          <Link to="/about/" style={{ textDecoration: 'none' }}>
            <SectionButton style={{ margin: '2rem auto' }}>about</SectionButton>
          </Link>
        </QuickInfoWrapper>
      </Section>
    )
  }
}

const QuickInfoWrapper = styled.div`
  width: 90%;
  margin: 2rem auto;
  .text {
    line-height: 2rem;
    color: ${styles.colors.mainGrey};
    word-spacing: 0.2rem;
  }
  @media (min-width: 768px) {
    width: 70%;
  }
  @media (min-width: 992px) {
    width: 60%;
  }
`