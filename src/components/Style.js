import './ComponentStyle.css';
const Style = () => {
    return (
        <div className="ComponentStyle">
            <h1>Style Component</h1>
            <InlineStyle />
        </div>
    );
};


const InlineStyle = () => {
    const ulStyle = {
        background: 'rgb(161 143 243)',
        padding: '.5rem',
        marginTop: '1rem'
    };
    return (
        <ul>
            <li style={ ulStyle }>Item-1</li>
            <li style={ ulStyle }>Item-2</li>
        </ul>
    );
};

export default Style;