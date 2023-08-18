import styled from 'styled-components';

export const FaqWrapper = styled.section`
    
    .faqs_wrap {
        max-width: 930px;
        margin: 0 auto;
    }
    .faqs_wrap ul{
        list-style: none;
        padding-left: 10px;
    }
    .faqs_wrap_collapse {
        border: none;
        background: transparent;
        font-family: 'neurial-grotesk';
    }
    .faqs_wrap_collapse .ant-collapse-item:last-child {
        border-radius: 0px;
    }
    .faqs_wrap_collapse .ant-collapse-item.ant-collapse-item-active .ant-collapse-expand-icon::after {
        transform: rotate(90deg);
    }
    .faqs_wrap_collapse .ant-collapse-item .ant-collapse-header {
        padding: 20px 0;
        align-items: center;
        flex-direction: row-reverse;
    }
    @media (max-width: 767px) {
        .faqs_wrap_collapse .ant-collapse-item .ant-collapse-header {
            padding: 16px 0;
            justify-content: space-between;
        }
    }
    .faqs_wrap_collapse .ant-collapse-item .ant-collapse-header .ant-collapse-expand-icon {
        position: relative;
        min-width: 15px;
        height: 25px;
        padding-left: 0px !important;
        display: flex;
        align-items: center;
    }
    .faqs_wrap_collapse .ant-collapse-item .ant-collapse-header .ant-collapse-expand-icon::before {
        content: '';
        position: absolute;
        width: 10px;
        height: 2px;
        background: #25292E;
        opacity: 0.5;
        transition: 0.5s cubic-bezier(0.215, 0.610, 0.355, 1);
    }
    .faqs_wrap_collapse .ant-collapse-item .ant-collapse-header .ant-collapse-expand-icon::after {
        content: '';
        position: absolute;
        width: 2px;
        height: 10px;
        background: #25292E;
        opacity: 0.5;
        left: 4px;
        transition: 0.5s cubic-bezier(0.215, 0.610, 0.355, 1);
    }
    .faqs_wrap_collapse .ant-collapse-item .ant-collapse-header .ant-collapse-expand-icon .anticon {
        display: none;
    }
    .faqs_wrap_collapse .ant-collapse-item .ant-collapse-header-text {
        font-family: 'neurial-grotesk';
        font-size: 20px;
        line-height: 28px;
        color: #25292E;
        opacity: 0.5;
        padding-right: 80px;
    }
    @media (max-width: 767px) {
        .faqs_wrap_collapse .ant-collapse-item .ant-collapse-header-text {
            font-size: 14px;
            line-height: 20px;
            max-width: calc(100% - 80px);
            padding-right: 0px;
        }
    }
    .faqs_wrap_collapse .ant-collapse-item .ant-collapse-content {
        border: none !important;
        background: transparent;
        transition: 0.5s cubic-bezier(0.215, 0.610, 0.355, 1) !important;
    }
    .faqs_wrap_collapse .ant-collapse-item .ant-collapse-content-box {
        padding: 0px 0 20px;
        font-family: 'neurial-grotesk';
        font-size: 15px;
        line-height: 26px;
        color: #25292E;
        opacity: 0.5;
        padding-right: 80px;
    }
    .faqs_wrap_collapse .ant-collapse-item .ant-collapse-content-box p {
        margin-bottom: 20px;
    }
    @media (max-width: 767px) {
        .faqs_wrap_collapse .ant-collapse-item .ant-collapse-content-box {
            font-size: 13px;
            line-height: 24px;
            padding: 0px 0 15px;
            padding-right: 20px;
    }
    }
`;