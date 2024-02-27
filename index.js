// fbdown.js
const axios = require('axios');

async function fbdown(url, format) {
    try {
        const result = await axios.post('https://x2download.com/api/ajaxSearch/facebook', `q=${encodeURIComponent(url)}`);
        const formattedVideo = formatVideo(result.data, format); // Tambahkan perintah format video di sini
        return {
            status: true,
            author: 'boedzhanks',
            result: formattedVideo,
        };
    } catch (error) {
        console.error(error);
        return {
            status: false,
            error: 'Terjadi kesalahan saat mengambil data.',
        };
    }
}

function formatVideo(data, format) {
    // Implementasi perintah format video di sini
    // Misalnya, mengonversi video ke format yang diinginkan (MP4, MKV, dll.)
    // Contoh: Jika format adalah 'mp4', ubah URL video menjadi URL video MP4
    if (format === 'mp4') {
        // Ambil URL video dari hasil data dan tambahkan ekstensi .mp4
        const videoUrl = data.video_url;
        const mp4Url = `${videoUrl}.mp4`;
        return mp4Url;
    } else if (format === 'mkv') {
        // Ambil URL video dari hasil data dan tambahkan ekstensi .mkv
        const videoUrl = data.video_url;
        const mkvUrl = `${videoUrl}.mkv`;
        return mkvUrl;
    } else {
        // Format tidak didukung, kembalikan data tanpa perubahan
        return data;
    }
}

module.exports = {
    fbdown: fbdown,
};
