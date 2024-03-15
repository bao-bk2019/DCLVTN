import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
Action1.propTypes = {

};

function Action1(props) {
    return (
        <Form>
            {['checkbox', 'radio'].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                    <Form.Check
                        inline
                        label="Option 1"
                        name="group1"
                        type={type}
                        id={`inline-${type}-1`}
                    />
                    <Form.Check
                        inline
                        label="Option 2"
                        name="group1"
                        type={type}
                        id={`inline-${type}-2`}
                    />
                    <Form.Check
                        inline
                        label="Option 3"
                        name='group1'
                        type={type}
                        id={`inline-${type}-3`}
                    />
                </div>
            ))}
        </Form>
    );
}

export default Action1;