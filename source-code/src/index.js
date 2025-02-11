(function (root, factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else {
        root.SM = factory();
    }
}(typeof self !== 'undefined' ? self : this, function () {
    const SM = {
        init(defaults = {}) {
            let settings = {
                duration: defaults.duration || 500,
                delay: defaults.delay || 0,
                shift: defaults.shift || '2rem',
                opacity: defaults.opacity || 0,
                blur: defaults.blur || 2,
                scale: defaults.scale || 0.8,
                once: defaults.once || false,
                visibility: defaults.visibility >= 0 && defaults.visibility <= 1 ? defaults.visibility : 0.5
            };
            document.querySelectorAll("[data-sm]").forEach(element => {
                const defaultStyles = {
                    opacity: element.style.opacity || 1,
                    transform: '',
                    scale: element.style.scale || 1,
                    filter: element.style.filter
                };

                let hiddenStyles = {
                    opacity: settings.opacity,
                    transitionDuration: `${settings.duration}ms`,
                    transitionDelay: `${settings.delay}ms`
                };

                element.once = settings.once;
                element.intersectionRatio = settings.visibility;
                element.shift = settings.shift;
                element.scale = settings.scale

                if(element.getAttribute("data-sm-duration")){
                    hiddenStyles.transitionDuration = `${element.getAttribute("data-sm-duration")}ms`
                }
                if(element.getAttribute("data-sm-delay")){
                    hiddenStyles.transitionDelay = `${element.getAttribute("data-sm-delay")}ms`
                }
                if(element.getAttribute("data-sm-opacity")){
                    hiddenStyles.opacity = element.getAttribute("data-sm-opacity")
                }
                if(element.getAttribute("data-sm-shift")){
                    element.shift = element.getAttribute("data-sm-shift")
                }
                if(element.getAttribute("data-sm-visibility")){
                    element.intersectionRatio = element.getAttribute("data-sm-visibility")
                }
                if(element.getAttribute("data-sm-scale")){
                    element.scale = element.getAttribute("data-sm-scale")
                }

                const attributes = element.getAttribute("data-sm").split(" ").filter(e => e !== '');
                attributes.forEach(attribute => {
                    switch (attribute) {
                        case ('up'):
                            hiddenStyles.transform = `translateY(${element.shift})`;
                            break;
                        case ('down'):
                            hiddenStyles.transform = `translateY(-${element.shift})`;
                            break;
                        case ('left'):
                            hiddenStyles.transform = `translateX(${element.shift})`;
                            break;
                        case ('right'):
                            hiddenStyles.transform = `translateX(-${element.shift})`;
                            break;
                        case ('blur'):
                            hiddenStyles.filter = defaultStyles.filter + ` blur(${settings.blur}px)`;
                            break;
                        case ('zoom'):
                            hiddenStyles.scale = element.scale * defaultStyles.scale;
                            break;
                        case ('once'):
                            element.once = !element.once;
                            break;
                        default:
                            console.error(`Unknown data-sm attribute: ${attribute}`);
                            break;
                    }
                });

                Object.keys(hiddenStyles).forEach(key => {
                    element.style[key] = hiddenStyles[key];
                });

                let scrolled = true;
                window.addEventListener("scroll", () => {
                    scrolled = true;
                });

                new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            scrolled = false;
                            Object.keys(defaultStyles).forEach(key => {
                                element.style[key] = defaultStyles[key];
                            });
                        } else if (!entry.isIntersecting && scrolled) {
                            if (!element.once) {
                                scrolled = false;
                                Object.keys(defaultStyles).forEach(key => {
                                    element.style[key] = hiddenStyles[key];
                                });
                            }
                        }
                    });
                }, {
                    threshold: [element.intersectionRatio > 0.01 ? element.intersectionRatio - 0.01 : 0, 1],
                }).observe(element);
            });
        }
    };

    return SM;
}));