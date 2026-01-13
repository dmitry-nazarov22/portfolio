import { Github, Instagram, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react"

export const ContactSection = () => {

    return <section
        id="contact"
        className="py-24 px-4 relative bg-secondary/30"
    >
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Get In <span className="text-primary">Touch</span>
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Are in need of a developer like me? Feel free to contact.
                I'm always open to discussing opportunities.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8">
                    <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

                    <div className="space-y-6 justify-center">
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Mail className="h-6 text-primary"/>
                            </div>
                            <div>
                                <h4 className="font-medium">Email</h4>
                                <a href="mailto:dima.nazarov22@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                                    dima.nazarov22@gmail.com
                                </a>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Phone className="h-6 text-primary"/>
                            </div>
                            <div>
                                <h4 className="font-medium">Phone</h4>
                                <a href="tel:+358453455050" className="text-muted-foreground hover:text-primary transition-colors">
                                    +358 45 345 5050
                                </a>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <MapPin className="h-6 text-primary"/>
                            </div>
                            <div>
                                <h4 className="font-medium">Location</h4>
                                <a className="text-muted-foreground hover:text-primary transition-colors">
                                    Tampere, Finland
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="space-y-8">
                    <h4 className="text-2xl font-semibold mb-6">Connect With Me</h4>
                    <div className="flex space-x-15 pt-15 justify-center">
                        <a
                            href="https://www.linkedin.com/in/dmitry-nazarov-85b2a9348"
                            target="_blank"
                        >
                            <Linkedin size={35}/>
                        </a>
                        <a
                            href="https://github.com/dmitry-nazarov22"
                            target="_blank"
                        >
                            <Github size={35}/>
                        </a>
                        <a
                            href="https://www.instagram.com/nnnazarov.dmitry?igsh=eG0yMGFhYTJ6NjQ3&utm_source=qr"
                            target="_blank"
                        >
                            <Instagram size={35}/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
}