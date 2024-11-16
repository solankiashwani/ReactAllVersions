import DynamicFieldComponent from "./DynamicFieldComponent";


// Form component that uses the withDynamicFields higher-order component
const DynamicForm = ({ fields, addField, updateField, removeField }) => {
    return (
        <div>
            {/* Render the dynamic text fields */}
            <h1> Dynamic Form fields component</h1>
            <h2>Demonstration of HOC pattern</h2>
            {fields.map((field, index) => (
                <div key={index}>
                    <input
                        type="text"
                        value={field}
                        onChange={(e) => updateField(index, e.target.value)}
                    />
                    <button onClick={() => removeField(index)}>Remove</button>
                </div>
            ))}

            {/* Button to add a new text field */}
            <button onClick={addField}>Add Field</button>
        </div>
    );
};

// Wrap the DynamicForm component with the withDynamicFields higher-order component
const FormWithDynamicFields = DynamicFieldComponent(DynamicForm);

export default FormWithDynamicFields;