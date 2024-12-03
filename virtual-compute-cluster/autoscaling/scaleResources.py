import boto3
import os

# AWS Auto Scaling using Boto3
ec2 = boto3.client('ec2', region_name='us-east-1')

def scale_up(instance_type, count):
    print(f"Scaling up {count} instances of type {instance_type}...")
    ec2.run_instances(
        ImageId='ami-0abcdef1234567890',
        InstanceType=instance_type,
        MinCount=count,
        MaxCount=count,
        KeyName='my-key-pair',
    )

def scale_down(instance_ids):
    print(f"Terminating instances: {instance_ids}")
    ec2.terminate_instances(InstanceIds=instance_ids)

if __name__ == "__main__":
    action = os.environ.get('ACTION', 'scale_up')
    if action == 'scale_up':
        scale_up('t2.medium', 2)
    elif action == 'scale_down':
        scale_down(['i-1234567890abcdef0'])

