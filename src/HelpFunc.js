class Func{


    debounce = (func, delay) => {
        let debounceHandler;
        return function () {
        const context = this;
        const args = arguments;
        clearTimeout(debounceHandler);
        debounceHandler = setTimeout(() => func.apply(context, args), delay);
    };

    };
    
    throttle = (func, limit) => {
        let inThrottle;
        return function () {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => (inThrottle = false), limit);
        }
        };
    };
}