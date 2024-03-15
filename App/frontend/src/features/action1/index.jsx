import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
Action1.propTypes = {
<<<<<<< HEAD

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
=======
    data: PropTypes.arrayOf(PropTypes.object),
};
function Action1(props) {
    return (
        <>
            <Form>
                <div key="checkbox" className="mb-3">
                    {Object.keys(props.data[0]).map((item, index) => (
                        <Form.Check
                            key={index} // Use a unique identifier for the key prop
                            inline
                            label={item} // Use curly braces to interpolate the value of 'key'
                            name={item}
                            type="checkbox"
                            id={index} // You can use a unique identifier for the id prop as well
                        />
                    ))}
                </div>

            </Form>
        </>
>>>>>>> Bao
    );
}

export default Action1;