var OUTPUT_VIDEO = "temp/video.mp4";
var ROTATED_MOV_VIDEO = "tests/assets/iphone_rotated.mov";

test(
		"ffmpeg-simple rotated mov",
		function() {
			QUnit
					.deepEqual(
							jsonize({
								"type" : "invoke",
								"transaction" : 124,
								"payload" : {
									"task" : "ffmpeg-simple",
									"payload" : {
										"source" : ROTATED_MOV_VIDEO,
										"output" : OUTPUT_VIDEO
									}
								}
							}),
							{
								transaction : 124,
								type : 'success',
								"payload" : [ {
									"payload" : {
										"source" : ROTATED_MOV_VIDEO,
										"output" : OUTPUT_VIDEO
									},
									"result" : {
										"filename" : OUTPUT_VIDEO,
										"stream_count" : 2,
										"size" : 170743,
										"bit_rate" : 599098,
										"start_time" : -0.02322,
										"duration" : 2.28,
										"format_name" : "QuickTime / MOV",
										"format_extensions" : [ "mov", "mp4",
												"m4a", "3gp", "3g2", "mj2" ],
										"format_default_extension" : "mov",
										"video" : {
											"index" : 0,
											"rotation" : 0,
											"width" : 320,
											"height" : 568,
											"rotated_width" : 320,
											"rotated_height" : 568,
											"codec_name" : "avc1",
											"codec_long_name" : "H.264 / AVC / MPEG-4 AVC / MPEG-4 part 10",
											"codec_profile" : "Constrained Baseline",
											"bit_rate" : 528635
										},
										"audio" : {
											"index" : 1,
											"codec_name" : "aac",
											"codec_long_name" : "AAC (Advanced Audio Coding)",
											"codec_profile" : "LC",
											"audio_channels" : 1,
											"sample_rate" : 44100,
											"bit_rate" : 61447
										}
									}
								} ]
							});
		});
