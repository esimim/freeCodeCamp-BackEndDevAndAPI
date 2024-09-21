# Access the Kubernetes Cluster

```
$ export AWS_ACCESS_KEY_ID=$(aws configure get aws_access_key_id --profile kops-manager)

$ export AWS_SECRET_ACCESS_KEY=$(aws configure get aws_secret_access_key --profile kops-manager)

$ export KOPS_STATE_STORE=s3://config.cloudvix.com.br

$ kops export kubeconfig cluster.cloudvix.com.br --admin
```

