const a = "access_token=BQA_uq-PfOLClSsmaeeIQXRvJ470pcTBsv5HUJ-Yx5VHzG_I8PCHKAduRzdDnsQh2Yx0iJV860d3z4KzPMaPgllfIsNaGOwrEoun_LK7a6hUdunH3gxGUWIY_yMSUmLUXllQGsqLVGePwd5xt9oyODdA7mHxOxWYnN8_gfkMFydn3em-o1_dPQDbF7vq2MpYPTXpFBYnb7h6fZrBUv68&token_type=Bearer&expires_in=3600";

const b = a.split("&")


const reduce = b.reduce((initial, item) => {
    let parts = item.split("=")
    console.log(decodeURIComponent(parts[1]))
    initial[parts[0]] = decodeURIComponent(parts[1])



}, {});
