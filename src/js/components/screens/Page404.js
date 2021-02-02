import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  text-align:center;
  display:flex;
  align-items: center;
  justify-content: center;
  height:100vh;

  }`

class Page404 extends React.Component {
    render() {
        return (
            <Wrapper>
                <span style={{'fontSize': '3em'}}>Không tìm thấy nội dung của bạn đang tìm kiếm vui lòng quay lại trang chủ.</span>
            </Wrapper>
        )
    }

}


export default Page404;
