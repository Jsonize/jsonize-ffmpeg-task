var NOT_EXISTING_VIDEO = "./notexisting.mp4";
var ROTATED_MOV_VIDEO = "tests/assets/iphone_rotated.mov";

test("ffprobe-simple not existing", function() {
	QUnit.deepEqual(jsonize({
		"type" : "invoke",
		"transaction" : 123,
		"payload" : {
			"task" : "ffprobe-simple",
			"payload" : {
				"source" : NOT_EXISTING_VIDEO
			}
		}
	}), {
		transaction : 123,
		type : 'error',
		payload : {
			index : 0,
			task : 'ffprobe-simple',
			payload : {
				source : NOT_EXISTING_VIDEO
			},
			error : 'File does not exist'
		}
	});
});

test("ffprobe-simple rotated mov", function() {
	QUnit.deepEqual(
		jsonize({
			"type" : "invoke",
			"transaction" : 124,
			"payload" : {
				"task" : "ffprobe-simple",
				"payload" : {
					"source" : ROTATED_MOV_VIDEO
				}
			}
		}),
		{
			transaction : 124,
			type : 'success',
			payload : [ {
				payload : {
					source : ROTATED_MOV_VIDEO
				},
				result : {
					filename : ROTATED_MOV_VIDEO,
					stream_count : 2,
					size : 159993,
					bit_rate : 581352,
					start_time : 0,
					duration : 2.201667,
					format_name : 'QuickTime / MOV',
					format_extensions : [ 'mov', 'mp4',
							'm4a', '3gp', '3g2', 'mj2' ],
					format_default_extension : 'mov',
					audio : {
						index : 0,
						codec_name : 'aac',
						codec_long_name : 'AAC (Advanced Audio Coding)',
						codec_profile : 'LC',
						audio_channels : 1,
						sample_rate : 44100,
						bit_rate : 61893
					},
					video : {
						index : 1,
						rotation : 90,
						width : 568,
						height : 320,
						rotated_height : 568,
						rotated_width : 320,
						codec_name : 'avc1',
						codec_long_name : 'H.264 / AVC / MPEG-4 AVC / MPEG-4 part 10',
						codec_profile : 'Baseline',
						bit_rate : 507677
					}
				}
			} ]
		});
});
