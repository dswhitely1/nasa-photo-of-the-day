module.exports = {
	theme : {
		screens    : {
			sm : '640px',
			md : '768px',
			lg : '1024px',
			xl : '1280px',
		},
		fontFamily : {
			body    : [ 'Michroma', 'sans-serif' ],
			display : [ 'Michroma', 'sans-serif' ],
		},

		extend     : {
			colors : {
				primary : '#670300',
			},
		},
		variants   : [ 'responsive', 'group-hover', 'focus-within', 'hover', 'focus', 'active' ],
		plugins    : [],
	},
};
