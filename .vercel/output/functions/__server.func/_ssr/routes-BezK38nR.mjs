import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { a as AnimatePresence, i as motion, n as useSpring, r as useMotionValue, t as useInView } from "../_libs/framer-motion.mjs";
import { a as Shield, c as Rocket, i as Sprout, l as Flame, n as Users, o as ShieldCheck, r as TrendingUp, s as Send, t as Zap } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BezK38nR.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CustomCursor() {
	const x = useMotionValue(-100);
	const y = useMotionValue(-100);
	const sx = useSpring(x, {
		damping: 25,
		stiffness: 350,
		mass: .4
	});
	const sy = useSpring(y, {
		damping: 25,
		stiffness: 350,
		mass: .4
	});
	const [hover, setHover] = (0, import_react.useState)(false);
	const [enabled, setEnabled] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (window.matchMedia("(pointer: coarse)").matches) return;
		setEnabled(true);
		const move = (e) => {
			x.set(e.clientX);
			y.set(e.clientY);
			const t = e.target;
			setHover(!!t.closest("button, a, [data-cursor='hover']"));
		};
		window.addEventListener("mousemove", move);
		return () => window.removeEventListener("mousemove", move);
	}, [x, y]);
	if (!enabled) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		style: {
			x: sx,
			y: sy
		},
		className: "pointer-events-none fixed left-0 top-0 z-[100] hidden md:block",
		animate: { scale: hover ? 2.2 : 1 },
		transition: {
			type: "spring",
			stiffness: 300,
			damping: 20
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "-translate-x-1/2 -translate-y-1/2 h-4 w-4 rounded-full bg-primary glow-gold" })
	});
}
var bullogo_default = "/assets/bullogo-1NqH-gtO.jpg";
function LoadingScreen() {
	const [done, setDone] = (0, import_react.useState)(false);
	const [pct, setPct] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		let n = 0;
		const id = setInterval(() => {
			n = Math.min(100, n + Math.random() * 14 + 4);
			setPct(Math.floor(n));
			if (n >= 100) {
				clearInterval(id);
				setTimeout(() => setDone(true), 350);
			}
		}, 90);
		return () => clearInterval(id);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: !done && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		initial: { opacity: 1 },
		exit: { opacity: 0 },
		transition: { duration: .5 },
		className: "fixed inset-0 z-[200] flex flex-col items-center justify-center bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					scale: .6,
					opacity: 0
				},
				animate: {
					scale: 1,
					opacity: 1
				},
				transition: {
					type: "spring",
					stiffness: 200,
					damping: 15
				},
				className: "relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 blur-3xl bg-primary/40 rounded-full" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/assets/bullogo-1NqH-gtO.jpg",
					alt: "Bull Smart Chain",
					className: "relative h-32 w-32 rounded-full object-cover ring-4 ring-primary glow-gold-strong"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-8 font-display text-xl font-bold text-gradient-gold",
				children: "Charging..."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 h-2 w-64 overflow-hidden rounded-full bg-white/10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					className: "h-full bg-gradient-to-r from-[#FF8C00] via-[#F6B300] to-[#FFD86B] glow-gold",
					style: { width: `${pct}%` }
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-xs text-muted-foreground tabular-nums",
				children: [pct, "%"]
			})
		]
	}) });
}
function Navbar() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.header, {
		initial: {
			y: -40,
			opacity: 0
		},
		animate: {
			y: 0,
			opacity: 1
		},
		transition: {
			duration: .6,
			ease: "easeOut"
		},
		className: "fixed top-0 left-0 right-0 z-40 flex justify-center px-4 pt-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: "flex w-full max-w-6xl items-center justify-between rounded-2xl border border-white/10 bg-black/50 px-4 py-3 backdrop-blur-xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#top",
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: bullogo_default,
						alt: "",
						className: "h-9 w-9 rounded-full object-cover ring-2 ring-primary/60"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-display font-bold tracking-tight",
						children: ["Bull ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gradient-gold",
							children: "Smart Chain"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hidden items-center gap-6 text-sm text-muted-foreground md:flex",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#about",
							className: "hover:text-primary transition-colors",
							children: "About"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#why",
							className: "hover:text-primary transition-colors",
							children: "Why Bull"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#stats",
							className: "hover:text-primary transition-colors",
							children: "Stats"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#community",
							className: "hover:text-primary transition-colors",
							children: "Community"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#launch",
					className: "rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-all hover:scale-105 hover:glow-gold-strong",
					children: "Launch App"
				})
			]
		})
	});
}
function Particles({ count = 25 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pointer-events-none absolute inset-0 overflow-hidden",
		children: (0, import_react.useMemo)(() => Array.from({ length: count }).map((_, i) => ({
			id: i,
			x: Math.random() * 100,
			y: Math.random() * 100,
			size: Math.random() * 4 + 2,
			d: Math.random() * 8 + 6,
			delay: Math.random() * 4
		})), [count]).map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
			className: "absolute rounded-full bg-primary/60",
			style: {
				left: `${p.x}%`,
				top: `${p.y}%`,
				width: p.size,
				height: p.size,
				filter: "blur(1px)"
			},
			animate: {
				y: [
					-20,
					20,
					-20
				],
				opacity: [
					.2,
					.9,
					.2
				]
			},
			transition: {
				duration: p.d,
				repeat: Infinity,
				delay: p.delay,
				ease: "easeInOut"
			}
		}, p.id))
	});
}
var SPEECHES = [
	"GM Bulls! 🐂",
	"Stay Bullish!",
	"Buy. Hold. Charge!",
	"Welcome to Bull Smart Chain!"
];
var EASTER = [
	"HODL! 💎",
	"TO THE MOON! 🚀",
	"BULLISH! 🐂",
	"WAGMI! 🔥"
];
function Hero() {
	const [msg, setMsg] = (0, import_react.useState)(0);
	const [clicks, setClicks] = (0, import_react.useState)(0);
	const [confetti, setConfetti] = (0, import_react.useState)([]);
	const [wobble, setWobble] = (0, import_react.useState)(false);
	const [easter, setEaster] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		const id = setInterval(() => setMsg((m) => (m + 1) % SPEECHES.length), 3200);
		return () => clearInterval(id);
	}, []);
	const bullClick = () => {
		const n = clicks + 1;
		setClicks(n);
		setWobble(true);
		setTimeout(() => setWobble(false), 500);
		setEaster(EASTER[n % EASTER.length]);
		setTimeout(() => setEaster(null), 1400);
		const colors = [
			"#F6B300",
			"#FF8C00",
			"#FFD86B",
			"#35E07F",
			"#FFFFFF"
		];
		const burst = Array.from({ length: 30 }).map((_, i) => ({
			id: Date.now() + i,
			x: Math.random() * 100,
			c: colors[i % colors.length]
		}));
		setConfetti((c) => [...c, ...burst]);
		setTimeout(() => setConfetti((c) => c.slice(burst.length)), 2200);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "top",
		className: "relative min-h-screen overflow-hidden pt-28 pb-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-hero-grid opacity-40" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(246,179,0,0.25),transparent_60%)]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(255,140,0,0.15),transparent_50%)]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Particles, { count: 30 }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: { duration: .7 },
						className: "inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-primary animate-pulse" }), "$BSC · Live on Binance Smart Chain"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
						initial: {
							opacity: 0,
							y: 30
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .8,
							delay: .1
						},
						className: "mt-6 font-display text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl",
						children: [
							"Stay Bullish.",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gradient-gold",
								children: "Build Strong."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .8,
							delay: .25
						},
						className: "mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground",
						children: "Powering the next bullish revolution with speed, security, and community at its core. Built for believers. Driven by holders. Ready to charge. 🚀"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .8,
							delay: .4
						},
						className: "mt-8 flex flex-col gap-3 sm:flex-row",
						id: "launch",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.a, {
							whileHover: { scale: 1.04 },
							whileTap: { scale: .97 },
							href: "#community",
							className: "group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#FF8C00] via-[#F6B300] to-[#FFD86B] px-7 py-4 font-semibold text-black shadow-[0_0_40px_rgba(246,179,0,0.4)] transition-all hover:shadow-[0_0_60px_rgba(246,179,0,0.7)]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rocket, { className: "h-5 w-5 transition-transform group-hover:-rotate-12" }), "Launch App"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.a, {
							whileHover: { scale: 1.04 },
							whileTap: { scale: .97 },
							href: "#community",
							className: "inline-flex items-center justify-center gap-2 rounded-2xl border border-primary/40 bg-white/5 px-7 py-4 font-semibold text-white backdrop-blur transition-all hover:bg-primary/10 hover:border-primary",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "h-5 w-5" }), "Join Community"]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: { opacity: 0 },
						animate: { opacity: 1 },
						transition: {
							delay: .7,
							duration: .8
						},
						className: "mt-10 flex flex-wrap gap-4 text-sm text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "h-4 w-4 text-primary" }), " Fast"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "h-4 w-4 text-primary" }), " Secure"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "h-4 w-4 text-primary" }), " Bullish"]
							})
						]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex items-center justify-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute h-[380px] w-[380px] rounded-full bg-primary/30 blur-3xl sm:h-[500px] sm:w-[500px]" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute h-[280px] w-[280px] rounded-full bg-orange-accent/40 blur-3xl" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
							mode: "wait",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								initial: {
									opacity: 0,
									y: 10,
									scale: .8
								},
								animate: {
									opacity: 1,
									y: 0,
									scale: 1
								},
								exit: {
									opacity: 0,
									y: -10,
									scale: .8
								},
								transition: { duration: .35 },
								className: "absolute -top-2 left-2 z-20 sm:left-0",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative rounded-2xl border-2 border-black bg-white px-4 py-2 font-display font-bold text-black shadow-[4px_4px_0_0_#F6B300]",
									children: [easter ?? SPEECHES[msg], /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -bottom-2 left-6 h-4 w-4 rotate-45 border-b-2 border-r-2 border-black bg-white" })]
								})
							}, easter ?? SPEECHES[msg])
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingBadge, {
							className: "absolute -left-2 top-16 sm:left-0",
							delay: 0,
							children: "⚡ Fast"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingBadge, {
							className: "absolute right-0 top-8",
							delay: .4,
							children: "🛡 Secure"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingBadge, {
							className: "absolute -left-4 bottom-16 sm:left-2",
							delay: .8,
							children: "🐂 Bullish"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingBadge, {
							className: "absolute -right-2 bottom-4 sm:right-0",
							delay: 1.2,
							children: "🚀 Community"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.button, {
							onClick: bullClick,
							"data-cursor": "hover",
							"aria-label": "Click the bull",
							animate: {
								y: [
									0,
									-16,
									0
								],
								rotate: wobble ? [
									0,
									-6,
									6,
									-3,
									0
								] : 0
							},
							transition: {
								y: {
									duration: 4,
									repeat: Infinity,
									ease: "easeInOut"
								},
								rotate: { duration: .5 }
							},
							whileHover: { scale: 1.03 },
							className: "relative z-10 overflow-hidden rounded-[2.5rem] ring-4 ring-primary/60 glow-gold-strong",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: bullogo_default,
								alt: "Bull Smart Chain mascot",
								className: "h-[340px] w-[340px] object-cover sm:h-[440px] sm:w-[440px]",
								draggable: false
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingCoin, {
							className: "absolute left-4 top-4",
							delay: 0
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingCoin, {
							className: "absolute right-6 top-24",
							delay: 1.2
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingCoin, {
							className: "absolute left-10 bottom-8",
							delay: 2.4
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute inset-0 overflow-hidden",
				children: confetti.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
					initial: {
						y: "40vh",
						x: `${p.x}vw`,
						opacity: 1,
						rotate: 0
					},
					animate: {
						y: "120vh",
						rotate: 720,
						opacity: 0
					},
					transition: {
						duration: 2,
						ease: "easeOut"
					},
					style: { backgroundColor: p.c },
					className: "absolute h-2 w-2 rounded-sm"
				}, p.id))
			})
		]
	});
}
function FloatingBadge({ children, className, delay }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		animate: { y: [
			0,
			-10,
			0
		] },
		transition: {
			duration: 3.5,
			repeat: Infinity,
			ease: "easeInOut",
			delay
		},
		className: `z-20 rounded-full border border-primary/40 bg-black/70 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur ${className}`,
		children
	});
}
function FloatingCoin({ className, delay }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		animate: {
			y: [
				0,
				-18,
				0
			],
			rotate: [0, 360]
		},
		transition: {
			y: {
				duration: 4,
				repeat: Infinity,
				ease: "easeInOut",
				delay
			},
			rotate: {
				duration: 6,
				repeat: Infinity,
				ease: "linear"
			}
		},
		className: `z-20 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#FFD86B] to-[#FF8C00] font-display text-xs font-bold text-black shadow-[0_0_25px_rgba(246,179,0,0.6)] ${className}`,
		children: "$BSC"
	});
}
var STATS = [
	{
		icon: Zap,
		label: "Fast Network",
		value: 99,
		suffix: "%",
		color: "from-[#F6B300] to-[#FF8C00]"
	},
	{
		icon: Shield,
		label: "Secure Community",
		value: 100,
		suffix: "K+",
		color: "from-[#FFD86B] to-[#F6B300]"
	},
	{
		icon: Flame,
		label: "Bullish Energy",
		value: 420,
		suffix: "%",
		color: "from-[#FF8C00] to-[#FF5500]"
	},
	{
		icon: Sprout,
		label: "Growing Ecosystem",
		value: 250,
		suffix: "+",
		color: "from-[#35E07F] to-[#F6B300]"
	}
];
function Stats() {
	const ref = (0, import_react.useRef)(null);
	const inView = useInView(ref, {
		once: true,
		amount: .3
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "stats",
		ref,
		className: "relative py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h2, {
				initial: {
					opacity: 0,
					y: 20
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: { once: true },
				className: "mb-14 text-center font-display text-4xl font-bold sm:text-5xl",
				children: ["Powered by ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-gradient-gold",
					children: "the Herd"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6",
				children: STATS.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 30
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					transition: {
						delay: i * .1,
						duration: .5
					},
					whileHover: { y: -6 },
					className: "card-premium relative overflow-hidden rounded-2xl p-6 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: `mx-auto mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${s.color}`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-6 w-6 text-black" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "font-display text-3xl font-bold sm:text-4xl",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
								value: s.value,
								run: inView
							}), s.suffix]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted-foreground",
							children: s.label
						})
					]
				}, s.label))
			})]
		})
	});
}
function Counter({ value, run }) {
	const [n, setN] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (!run) return;
		const start = performance.now();
		const dur = 1500;
		const tick = (t) => {
			const p = Math.min(1, (t - start) / dur);
			setN(Math.floor(p * value));
			if (p < 1) requestAnimationFrame(tick);
		};
		requestAnimationFrame(tick);
	}, [run, value]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "tabular-nums text-gradient-gold",
		children: n
	});
}
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "about",
		className: "relative py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative flex justify-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute h-72 w-72 rounded-full bg-primary/20 blur-3xl" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
						animate: { y: [
							0,
							-10,
							0
						] },
						transition: {
							duration: 5,
							repeat: Infinity,
							ease: "easeInOut"
						},
						src: bullogo_default,
						alt: "",
						className: "relative h-72 w-72 rounded-3xl object-cover ring-2 ring-primary/40 rotate-3"
					}),
					[
						"🐂",
						"💎",
						"🚀",
						"⚡"
					].map((e, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
						animate: {
							y: [
								0,
								-14,
								0
							],
							rotate: [
								0,
								12,
								0
							]
						},
						transition: {
							duration: 3 + i * .4,
							repeat: Infinity,
							delay: i * .3
						},
						className: `absolute text-3xl ${[
							"top-2 -left-2",
							"-top-4 right-6",
							"-bottom-2 left-8",
							"bottom-4 -right-4"
						][i]}`,
						children: e
					}, i))
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h2, {
				initial: {
					opacity: 0,
					y: 20
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: { once: true },
				className: "font-display text-4xl font-bold sm:text-5xl",
				children: ["What is ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-gradient-gold",
					children: "Bull Smart Chain?"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 20
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: { once: true },
				transition: { delay: .15 },
				className: "mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Bull Smart Chain ($BSC) is more than a crypto project. It's a movement built around speed, security, strong community and unstoppable bullish energy." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We believe every holder is part of the herd." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-semibold text-white",
						children: ["Together we build. Together we charge. ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gradient-gold",
							children: "Together we stay bullish."
						})]
					})
				]
			})] })]
		})
	});
}
var CARDS = [
	{
		icon: Zap,
		title: "Fast",
		text: "Lightning-fast ecosystem built for real-world speed."
	},
	{
		icon: ShieldCheck,
		title: "Secure",
		text: "Built for long-term believers with audited foundations."
	},
	{
		icon: Users,
		title: "Community First",
		text: "Every holder matters. The herd runs the show."
	},
	{
		icon: TrendingUp,
		title: "Bullish Future",
		text: "Always charging forward. Never looking back."
	}
];
function WhyBull() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "why",
		className: "relative py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h2, {
					initial: {
						opacity: 0,
						y: 20
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					className: "text-center font-display text-4xl font-bold sm:text-5xl",
					children: ["Why ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient-gold",
						children: "Bull?"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-4 max-w-xl text-center text-muted-foreground",
					children: "Four reasons the herd keeps growing every single day."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4",
					children: CARDS.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 30
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						transition: { delay: i * .08 },
						whileHover: {
							y: -10,
							rotate: -1
						},
						className: "group card-premium relative overflow-hidden rounded-2xl p-6 transition-all hover:border-primary/60 hover:glow-gold",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/10 blur-2xl transition-all group-hover:bg-primary/30" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#FFD86B] to-[#FF8C00] text-black",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(c.icon, { className: "h-6 w-6" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4 font-display text-xl font-bold",
									children: c.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-relaxed text-muted-foreground",
									children: c.text
								})
							]
						})]
					}, c.title))
				})
			]
		})
	});
}
function FootprintDivider() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "relative h-16 overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-y-0 left-0 right-0 flex items-center gap-8 text-primary/40",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				animate: { x: ["-10%", "10%"] },
				transition: {
					duration: 8,
					repeat: Infinity,
					repeatType: "reverse",
					ease: "linear"
				},
				className: "flex gap-10 whitespace-nowrap text-2xl",
				children: Array.from({ length: 20 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "🐾 🐂 🐾 🐂" }, i))
			})
		})
	});
}
function XIcon$1(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 24 24",
		fill: "currentColor",
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M18.244 2H21.5l-7.5 8.57L22.5 22h-6.844l-5.36-6.99L4.2 22H.94l8.03-9.18L1.5 2h7.02l4.85 6.4L18.244 2Zm-1.2 18h1.79L7.05 4H5.17l11.874 16Z" })
	});
}
function Community() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "community",
		className: "relative py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-4xl px-6 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h2, {
					initial: {
						opacity: 0,
						y: 20
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					className: "font-display text-4xl font-bold sm:text-5xl",
					children: ["Join the ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient-gold",
						children: "Herd"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-4 max-w-xl text-muted-foreground",
					children: "Charge with thousands of bulls already stampeding on socials."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.a, {
						href: "https://x.com/BullSmartChain",
						target: "_blank",
						rel: "noreferrer",
						whileHover: { scale: 1.05 },
						whileTap: { scale: .96 },
						className: "group inline-flex items-center gap-3 rounded-2xl border border-white/15 bg-white/5 px-7 py-4 font-semibold backdrop-blur transition-all hover:border-primary hover:bg-primary/10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
							whileHover: { rotate: 15 },
							className: "inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white text-black",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(XIcon$1, { className: "h-4 w-4" })
						}), "Follow on X"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.a, {
						href: "https://t.me/BullSmartChain",
						target: "_blank",
						rel: "noreferrer",
						whileHover: { scale: 1.05 },
						whileTap: { scale: .96 },
						className: "group inline-flex items-center gap-3 rounded-2xl border border-primary/30 bg-primary/10 px-7 py-4 font-semibold backdrop-blur transition-all hover:bg-primary/20 hover:border-primary hover:glow-gold",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
							initial: { x: 0 },
							whileHover: { x: 4 },
							className: "inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#28A8E9] to-[#0088cc] text-white",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-4 w-4" })
						}), "Join Telegram"]
					})]
				})
			]
		})
	});
}
function CTA() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-5xl px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative overflow-hidden rounded-[2rem] border border-primary/30 bg-gradient-to-br from-[#1a1207] via-[#111] to-[#0a0a0a] px-8 py-16 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(246,179,0,0.25),transparent_60%)]" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
						animate: {
							y: [
								0,
								-12,
								0
							],
							rotate: [
								-4,
								4,
								-4
							]
						},
						transition: {
							duration: 5,
							repeat: Infinity
						},
						src: bullogo_default,
						alt: "",
						className: "relative mx-auto h-24 w-24 rounded-2xl object-cover ring-2 ring-primary glow-gold"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h2, {
						initial: {
							opacity: 0,
							y: 20
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						className: "relative mt-6 font-display text-4xl font-bold sm:text-6xl",
						children: ["Ready To ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gradient-gold",
							children: "Charge?"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "relative mx-auto mt-4 max-w-xl text-muted-foreground",
						children: [
							"Become part of the Bull Smart Chain movement today.",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Stay Bullish. Build Strong."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.a, {
						href: "https://t.me/BullSmartChain",
						target: "_blank",
						rel: "noreferrer",
						whileHover: { scale: 1.06 },
						whileTap: { scale: .96 },
						animate: { boxShadow: [
							"0 0 30px rgba(246,179,0,0.4)",
							"0 0 60px rgba(246,179,0,0.7)",
							"0 0 30px rgba(246,179,0,0.4)"
						] },
						transition: { boxShadow: {
							duration: 2.5,
							repeat: Infinity
						} },
						className: "relative mt-8 inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-[#FF8C00] via-[#F6B300] to-[#FFD86B] px-10 py-5 text-lg font-bold text-black",
						children: "🐂 Join Bull Army"
					})
				]
			})
		})
	});
}
function XIcon(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 24 24",
		fill: "currentColor",
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M18.244 2H21.5l-7.5 8.57L22.5 22h-6.844l-5.36-6.99L4.2 22H.94l8.03-9.18L1.5 2h7.02l4.85 6.4L18.244 2Zm-1.2 18h1.79L7.05 4H5.17l11.874 16Z" })
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "relative border-t border-white/5 py-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: bullogo_default,
						alt: "",
						className: "h-10 w-10 rounded-full object-cover ring-2 ring-primary/50"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-display font-bold",
						children: ["Bull ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gradient-gold",
							children: "Smart Chain"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: "Built for the community."
					})] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "https://x.com/BullSmartChain",
						target: "_blank",
						rel: "noreferrer",
						"aria-label": "X",
						className: "inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-all hover:border-primary hover:bg-primary hover:text-black",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(XIcon, { className: "h-4 w-4" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "https://t.me/BullSmartChain",
						target: "_blank",
						rel: "noreferrer",
						"aria-label": "Telegram",
						className: "inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-all hover:border-primary hover:bg-primary hover:text-black",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-4 w-4" })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground",
					children: "© 2026 Bull Smart Chain"
				})
			]
		})
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "relative min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoadingScreen, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomCursor, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FootprintDivider, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stats, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FootprintDivider, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhyBull, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Community, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTA, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { Index as component };
