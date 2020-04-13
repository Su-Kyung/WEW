import React from 'react';

const Feedback = () => {
    return (
        <div>
            <div>
                <img class="Feedback" src="page_feedback.png"/>
                <img class="Feedback-waiting" src="feedback_waiting.png"/>
            </div>
            <div class="Feedback-body">
                <img class="Feedback-btn-submit" src="btn_submit.png"/>
                {/* <img class="Feedback-input" src="feedback_email.png"/> */}
                <img class="Home-input-email" src="input_box.png"/>
            </div>
        </div>
    )
}

export default Feedback;