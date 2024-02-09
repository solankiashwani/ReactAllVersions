import React from 'react';

// Higher-order component for adding dynamic text fields
const DynamicFieldComponent = (WrappedComponent) => {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                fields: [''] // Initial array of fields with an empty string
            };
        }

        // Function to handle adding a new field
        addField = () => {
            this.setState((prevState) => ({
                fields: [...prevState.fields, ''] // Add an empty string to the fields array
            }));
        };

        // Function to handle updating a field value
        updateField = (index, value) => {
            this.setState((prevState) => {
                const fields = [...prevState.fields];
                fields[index] = value; // Update the value of the field at the specified index
                return { fields };
            });
        };

        // Function to handle removing a field
        removeField = (index) => {
            this.setState((prevState) => {
                const fields = [...prevState.fields];
                fields.splice(index, 1); // Remove the field at the specified index
                return { fields };
            });
        };

        render() {
            const { fields } = this.state;

            // Pass the fields and field manipulation functions as props to the wrapped component
            return (
                <WrappedComponent
                    fields={fields}
                    addField={this.addField}
                    updateField={this.updateField}
                    removeField={this.removeField}
                />
            );
        }
    };
};

export default DynamicFieldComponent;