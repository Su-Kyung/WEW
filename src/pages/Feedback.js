import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const Feedback = () => {
    return (
        <div>
            <div>
                <img class="Feedback" src="page_feedback.png"/>
                <img class="Feedback-waiting" src="feedback_waiting.png"/>
            </div>
            <div class="Feedback-body">
                {/* 피드백 제출하기 버튼
                <img class="Feedback-btn-submit" src="btn_submit.png"/> */}
                <Button id="btn_submit" variant="outlined">제출하기</Button>

                {/* 피드백 작성
                <img class="Feedback-input" src="feedback_email.png"/>
                <img class="Home-input-email" src="input_box.png"/> */}
                <TextField
                    id="feedback_email"
                    label="이메일"
                    variant="outlined"
                    defaultValue="회신받을 이메일 주소를 입력하세요." />
                <TextField
                    id="feedback_contents"
                    label="내용"
                    variant="outlined"
                    multiline
                    defaultValue="내용을 입력하세요." />


                
                

            </div>
        </div>
    )
}

export default Feedback;