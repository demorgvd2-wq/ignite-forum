import Button from '@/components/Button';
import Field from '@/components/Field';
import { fetcher } from '@/lib/fetcher';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import useSWRMutation from 'swr/mutation';
import {
    useJoinUsStep,
    useJoinUsStudentInfo,
    useJoinUsNotifications,
    useSetJoinUsHeading,
} from '../store';

export default function StepFive() {
    useSetJoinUsHeading({
        title: 'Confirm Terms',
        description:
            'You must read and agree to the terms and proceed to complete the membership payment.',
    });

    const [agreement, setAgreement] = useState(false);
    const [agreementError, setAgreementError] = useState<string | null>(null);

    const { prevStep } = useJoinUsStep();
    const { studentInfo } = useJoinUsStudentInfo();
    const { notifications } = useJoinUsNotifications();

    const router = useRouter();
    const createMember = useSWRMutation('member', fetcher.post.mutate, {
        onError: () => {
            setAgreementError('Server error.');
        },
        onSuccess: () => {
            router.push('/settings');
            router.refresh();
        },
    });

    const handleSignUp = async () => {
        // Combine student info and notifications
        const memberData = {
            ...studentInfo,
            notifications,
        };

        setAgreementError(null);
        if (!agreement) {
            setAgreementError('Please agree to the terms');
            return;
        }
        createMember.trigger(memberData);
    };

    const toggleAgreement = () => setAgreement(!agreement);

    return (
        <div>
            <div className="mb-4 mt-8">
                <Field
                    label={
                        <>
                            By submitting this form, you agree to abide by the{' '}
                            <a
                                href="https://github.com/ignite-forum/Constitution"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-orange underline"
                            >
                                Ignite Forum Guidelines and Code of Conduct
                            </a>{' '}
                            . You acknowledge that failure to adhere to these guidelines may result
                            in your membership being suspended or revoked. You also acknowledge that
                            services and events offered by Ignite Forum may change at any time at our
                            discretion without notice.
                        </>
                    }
                    value={agreement ? 'Yes' : 'No'}
                    onChange={toggleAgreement}
                    error={agreementError}
                    type="checkbox"
                />
            </div>
            <div className="grid grid-cols-2 gap-4">
                <Button onClick={prevStep} colour="orange" width="w-full" size="small">
                    Back
                </Button>
                <Button
                    onClick={handleSignUp}
                    colour="purple"
                    width="w-full"
                    size="small"
                    loading={createMember.isMutating}
                >
                    Sign up
                </Button>
            </div>
        </div>
    );
}
