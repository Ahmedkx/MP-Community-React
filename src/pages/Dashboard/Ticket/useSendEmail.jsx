import emailjs from '@emailjs/browser';

export default function useSendEmail() {

    function sendEmail(data){
        emailjs.send('service_v8a1k3g', 'template_y2xp75y', data, 'Uun73nDWVIB1-cipQ')
    }

    return [sendEmail]
}
