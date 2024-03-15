import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
Action1.propTypes = {
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
    );
}

export default Action1;