// https://whatsapp.com/channel/0029VaW25g5F1YlKczMRmd1h/1224
async function tnyim(url) {
        try {
            const response = await fetch(`https://tny.im/yourls-api.php?format=json&action=shorturl&url=${url}`);
            const result = await response.json();
            return result.shorturl;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

//module.exports = { tnyim }
//Contoh Penggunaan return tnyim('https://tanakasenn.com'
