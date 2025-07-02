function Button() {
    function handleClick() {
        alert('Ты нажал на меня');
    };

    return (
        <button ocClick={handleClick}>
            Click me
        </button>
    );
}

export default Button;