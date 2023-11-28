





const defaults = {
	title: "[No Title]",
	bundle: "bundle.js"
};


export default function(options = {}) {
	const opts = Object.assign(defaults, options);
	return `<html>
	<head>
		<title>${opts.title}</title>
		<script src="${opts.bundle}" type="text/javascript"></script>
	</head>
	<body>
		<div style="width: 400px; height: 400px; background: black">
			<div style="position:absolute; width: 10px; height: 50px; background: white" class="paddle1"></div>
			<div style="position:absolute; width: 10px; height: 50px; background: white" class="paddle2"></div>
			<div style="position:absolute; width: 5px; height: 5px; background: white" class="ball"></div>
		</div>
	</body>
</html>`;
}

