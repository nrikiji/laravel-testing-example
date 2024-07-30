import PrimaryButton from '@/Components/PrimaryButton';
import { useForm, usePage } from '@inertiajs/react';
import { Transition } from '@headlessui/react';
import { FormEventHandler } from 'react';
import { PageProps } from '@/types';

export default function SendEmailForm({ className = '' }: { className?: string }) {
    const user = usePage<PageProps>().props.auth.user;

    const { patch, processing, recentlySuccessful } = useForm();

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        patch(route('profile.sendEmail'));
    };

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">Send Test Email</h2>

                <p className="mt-1 text-sm text-gray-600">
                    ログイン中のユーザーにメールを送信します
                </p>
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6">
                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing}>Send Email</PrimaryButton>

                    <Transition
                        show={recentlySuccessful}
                    >
                        <p className="text-sm text-gray-600">Sended.</p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}
