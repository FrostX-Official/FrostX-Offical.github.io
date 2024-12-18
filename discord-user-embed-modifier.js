var discordUserEmbed = document.getElementById("discord-user-embed")
console.dir(discordUserEmbed)

discordUserEmbed.addEventListener("load", function() {
    var discordUserEmbedCSSLink = document.createElement("link")
    discordUserEmbedCSSLink.rel = "stylesheet"
    discordUserEmbedCSSLink.href = "discord-user-embed.css"

    this.contentWindow.document.head.appendChild(discordUserEmbedCSSLink)

    console.log("modified discord user embed!")
});

console.log("trying to modify discord user embed...")
discordUserEmbed.src = "https://widgets.vendicated.dev/user?id=908779319084589067&theme=dark&banner=true&full-banner=false&rounded-corners=true&discord-icon=true&badges=true&guess-nitro=true&background-color=%23040404&foreground-color=%23fff"