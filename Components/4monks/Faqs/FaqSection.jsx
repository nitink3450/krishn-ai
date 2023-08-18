import { Collapse } from 'antd';
import HTMLReactParser from 'html-react-parser';
import PropTypes from 'prop-types';
import React, { memo } from 'react';
import { FaqWrapper } from './FaqSectionStyle';

const { Panel } = Collapse;
const text = ``;

const FaqSection = ({ data }) => {

  return (
    <FaqWrapper>
      <section>
        <div className="faqs_wrap">
          <div className="space_80"></div>
          <div className="gridv2_title">What? Why? How? <br />All answered.</div>
          <Collapse
            accordion
            defaultActiveKey={['0']}
            className="faqs_wrap_collapse"
          >
            {data?.map((item, i) => {
              return (
                <Panel header={HTMLReactParser(item.title)} className="" key={item.id}>
                  {HTMLReactParser(item.desc)}
                </Panel>
              );
            })}
          </Collapse>
          <div className="space_80"></div>
        </div>
      </section>
    </FaqWrapper>
  );
};

FaqSection.PropTypes = {
  data: PropTypes.array.isRequired,
};

export default memo(FaqSection);