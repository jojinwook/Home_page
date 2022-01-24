import React from 'react'
// , { useState }
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


function Qna(props) {
  // const [Active, setActive] = useState(false)
  const num = props.idx
  return (
    <div className={props.show ? "faq-list show1" : "faq-list hide1"} onClick={() => props.onQnaClick(num)}>
      <div className="faq-title">
        <h3><span dangerouslySetInnerHTML={{ __html: props.qna.title }}></span></h3>
        <KeyboardArrowDownIcon style={{
          position: 'absolute',
          top: '50%',
          right: '14px', width: "24px", height: "24px"
        }} className="faq_icon"

        />
        {/* <img width="24px" height="24px" src={KeyboardArrowDownIcon} className="faq_icon" 
          style={{
            position: 'absolute',
            top: '50%',
            right: '14px'
          }}
        /> */}

      </div>

      <div className="faq-content">
        <p><span dangerouslySetInnerHTML={{ __html: props.qna.content }}></span></p>
      </div>
    </div>
  )
}

export default Qna
