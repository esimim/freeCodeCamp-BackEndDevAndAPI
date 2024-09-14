# Access the Kubernetes Cluster

```
$ export AWS_ACCESS_KEY_ID=$(aws configure get aws_access_key_id --profile kops-manager)

$ export AWS_SECRET_ACCESS_KEY=$(aws configure get aws_secret_access_key --profile kops-manager)

$ kops export kubeconfig cluster.cloudvix.com.br --admin
```

