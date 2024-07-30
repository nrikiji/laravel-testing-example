import PrimaryButton from '@/Components/PrimaryButton';
import { useForm, usePage } from '@inertiajs/react';
import { Transition } from '@headlessui/react';
import { FormEventHandler } from 'react';
import { PageProps } from '@/types';

export default function RequestExternalApiForm({ className = '' }: { className?: string }) {
    const user = usePage<PageProps>().props.auth.user;

    const { patch, processing, recentlySuccessful } = useForm();

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        patch(route('profile.requestExternalApi'));
    };

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">Request External Api</h2>

                <p className="mt-1 text-sm text-gray-600">
                    外部APIへリクエストします
                </p>
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6">
                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing}>Request Api</PrimaryButton>

                    <Transition
                        show={recentlySuccessful}
                    >
                        <p className="text-sm text-gray-600">Requested.</p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}
