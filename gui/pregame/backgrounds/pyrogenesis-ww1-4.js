g_BackgroundLayerData.push(
    [
        {
            "offset": () => 0,
            "sprite": "pyrogenesis-ww1-4",
            "tiling": true,
        },
		{
			"offset": (time, width) => 0.05 * width * Math.cos(0.1 * time),
			"sprite": "background-viking-02",
			"tiling": true
		}
	]);