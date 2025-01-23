(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[405],{

/***/ 1476:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/",
      function () {
        return __webpack_require__(8717);
      }
    ]);
    if(false) {}
  

/***/ }),

/***/ 8717:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Home; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(2676);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__(5271);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@14.2.6_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/head.js
var head = __webpack_require__(4822);
var head_default = /*#__PURE__*/__webpack_require__.n(head);
// EXTERNAL MODULE: ./node_modules/.pnpm/@radix-ui+react-slot@1.1.0_@types+react@18.3.12_react@18.3.1/node_modules/@radix-ui/react-slot/dist/index.mjs
var dist = __webpack_require__(1557);
// EXTERNAL MODULE: ./node_modules/.pnpm/class-variance-authority@0.7.0/node_modules/class-variance-authority/dist/index.mjs + 1 modules
var class_variance_authority_dist = __webpack_require__(2808);
// EXTERNAL MODULE: ./src/lib/utils.ts + 2 modules
var utils = __webpack_require__(1814);
;// CONCATENATED MODULE: ./src/components/ui/button.tsx





const buttonVariants = (0,class_variance_authority_dist/* cva */.j)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
            outline: "text-foreground border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2",
            sm: "h-8 rounded-md px-3 text-xs",
            lg: "h-10 rounded-md px-8",
            icon: "h-9 w-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ react.forwardRef((param, ref)=>{
    let { className, variant, size, asChild = false, ...props } = param;
    const Comp = asChild ? dist/* Slot */.g7 : "button";
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Comp, {
        className: (0,utils.cn)(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    });
});
Button.displayName = "Button";


;// CONCATENATED MODULE: ./src/components/ui/input.tsx



const Input = /*#__PURE__*/ react.forwardRef((param, ref)=>{
    let { className, type, ...props } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
        type: type,
        className: (0,utils.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50", className),
        ref: ref,
        ...props
    });
});
Input.displayName = "Input";


;// CONCATENATED MODULE: ./src/components/ui/card.tsx



const Card = /*#__PURE__*/ react.forwardRef((param, ref)=>{
    let { className, ...props } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        ref: ref,
        className: (0,utils.cn)("rounded-[calc(var(--radius))] border-border border bg-card text-card-foreground shadow", className),
        ...props
    });
});
Card.displayName = "Card";
const CardHeader = /*#__PURE__*/ react.forwardRef((param, ref)=>{
    let { className, ...props } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        ref: ref,
        className: (0,utils.cn)("flex flex-col space-y-1.5 p-6", className),
        ...props
    });
});
CardHeader.displayName = "CardHeader";
const CardTitle = /*#__PURE__*/ react.forwardRef((param, ref)=>{
    let { className, ...props } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
        ref: ref,
        className: (0,utils.cn)("font-semibold leading-none tracking-tight", className),
        ...props
    });
});
CardTitle.displayName = "CardTitle";
const CardDescription = /*#__PURE__*/ react.forwardRef((param, ref)=>{
    let { className, ...props } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
        ref: ref,
        className: (0,utils.cn)("text-sm text-muted-foreground", className),
        ...props
    });
});
CardDescription.displayName = "CardDescription";
const CardContent = /*#__PURE__*/ react.forwardRef((param, ref)=>{
    let { className, ...props } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        ref: ref,
        className: (0,utils.cn)("p-6 pt-0", className),
        ...props
    });
});
CardContent.displayName = "CardContent";
const CardFooter = /*#__PURE__*/ react.forwardRef((param, ref)=>{
    let { className, ...props } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        ref: ref,
        className: (0,utils.cn)("flex items-center p-6 pt-0", className),
        ...props
    });
});
CardFooter.displayName = "CardFooter";


// EXTERNAL MODULE: ./src/components/ui/use-toast.ts
var use_toast = __webpack_require__(1042);
// EXTERNAL MODULE: ./src/components/ui/toaster.tsx + 16 modules
var toaster = __webpack_require__(4436);
;// CONCATENATED MODULE: ./src/pages/index.tsx








function Home() {
    const [email, setEmail] = (0,react.useState)("");
    const [isLoading, setIsLoading] = (0,react.useState)(false);
    const handleSubscribe = async (e)=>{
        e.preventDefault();
        setIsLoading(true);
        try {
            const response = await fetch("/api/subscribe", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email
                })
            });
            if (!response.ok) throw new Error("Subscription failed");
            (0,use_toast/* toast */.Am)({
                title: "Success!",
                description: "Thank you for joining our waitlist!"
            });
            setEmail("");
        } catch (error) {
            (0,use_toast/* toast */.Am)({
                title: "Error",
                description: "Something went wrong. Please try again.",
                variant: "destructive"
            });
        } finally{
            setIsLoading(false);
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("title", {
                        children: "Spendcodes - The Future of Digital Payments"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("meta", {
                        name: "description",
                        content: "Spendcodes - Can't spend cash. Don't spend cards. Spend codes in store on online."
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "min-h-screen bg-background",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
                        className: "container mx-auto px-4 py-20",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "grid grid-cols-1 lg:grid-cols-2 gap-8 items-center",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "space-y-6",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("h1", {
                                            className: "text-4xl md:text-6xl font-bold text-foreground",
                                            children: [
                                                "Can't spend cash.",
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
                                                "Don't spend cards.",
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
                                                "Spend codes in store on online."
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                            className: "text-lg text-muted-foreground",
                                            children: "The future of digital payments is here. Simple, secure, and seamless."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: "aspect-square relative bg-muted rounded-lg overflow-hidden",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("video", {
                                        className: "absolute inset-0 w-full h-full object-cover",
                                        autoPlay: true,
                                        muted: true,
                                        loop: true,
                                        playsInline: true,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("source", {
                                                src: "/video-placeholder.mp4",
                                                type: "video/mp4"
                                            }),
                                            "Your browser does not support the video tag."
                                        ]
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                        className: "container mx-auto px-4 py-20 bg-muted/50",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                                className: "text-3xl font-bold text-center mb-12",
                                children: "How It Works"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "grid grid-cols-1 md:grid-cols-3 gap-8",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Card, {
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardContent, {
                                            className: "pt-6",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                    className: "text-2xl font-bold mb-2",
                                                    children: "1. Generate"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                    className: "text-muted-foreground",
                                                    children: "Generate secure spending codes instantly through our platform."
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Card, {
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardContent, {
                                            className: "pt-6",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                    className: "text-2xl font-bold mb-2",
                                                    children: "2. Load"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                    className: "text-muted-foreground",
                                                    children: "Load your desired amount onto the code using various payment methods."
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Card, {
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardContent, {
                                            className: "pt-6",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                    className: "text-2xl font-bold mb-2",
                                                    children: "3. Spend"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                    className: "text-muted-foreground",
                                                    children: "Use your code to make purchases online or in participating stores."
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                        className: "container mx-auto px-4 py-20",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                                className: "text-3xl font-bold text-center mb-12",
                                children: "Who It's For"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Card, {
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardContent, {
                                            className: "pt-6",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                                    className: "text-xl font-bold mb-2",
                                                    children: "Parents"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                    className: "text-muted-foreground",
                                                    children: "Control spending and teach financial responsibility to children."
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Card, {
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardContent, {
                                            className: "pt-6",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                                    className: "text-xl font-bold mb-2",
                                                    children: "Online Shoppers"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                    className: "text-muted-foreground",
                                                    children: "Shop securely without sharing card details online."
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Card, {
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardContent, {
                                            className: "pt-6",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                                    className: "text-xl font-bold mb-2",
                                                    children: "Businesses"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                    className: "text-muted-foreground",
                                                    children: "Manage employee expenses and digital payments efficiently."
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Card, {
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardContent, {
                                            className: "pt-6",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                                    className: "text-xl font-bold mb-2",
                                                    children: "Gift Givers"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                    className: "text-muted-foreground",
                                                    children: "Send digital gift codes instantly to friends and family."
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
                        className: "container mx-auto px-4 py-20 bg-muted/50",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "max-w-2xl mx-auto text-center",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                                    className: "text-3xl font-bold mb-6",
                                    children: "Get Early Access!"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                    className: "text-muted-foreground mb-8",
                                    children: "Be among the first to experience the future of digital payments."
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
                                    onSubmit: handleSubscribe,
                                    className: "flex gap-4 max-w-md mx-auto",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Input, {
                                            type: "email",
                                            placeholder: "Enter your email",
                                            value: email,
                                            onChange: (e)=>setEmail(e.target.value),
                                            required: true,
                                            className: "flex-1"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Button, {
                                            type: "submit",
                                            disabled: isLoading,
                                            children: isLoading ? "Joining..." : "Join Waitlist"
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(toaster/* Toaster */.x, {})
        ]
    });
}


/***/ }),

/***/ 4822:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(1727)


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [888,774,179], function() { return __webpack_exec__(1476); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);